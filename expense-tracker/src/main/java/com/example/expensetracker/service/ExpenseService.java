package com.example.expensetracker.service;

import com.example.expensetracker.model.Expense;
import com.example.expensetracker.model.User;
import com.example.expensetracker.repository.ExpenseRepository;
import com.example.expensetracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Expense> getUserExpenses(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) return Collections.emptyList();
        return expenseRepository.findByUser(user);
    }

    public Expense addExpenseForUser(Expense expense, String email) {
        User user = userRepository.findByEmail(email);
        expense.setUser(user);
        return expenseRepository.save(expense);
    }

    public Expense getExpenseById(Long id, String email) {
        Expense exp = expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found"));
        // Ensure expense belongs to user
        if (exp.getUser() == null || !email.equals(exp.getUser().getEmail())) {
            throw new RuntimeException("Not authorized to access this expense");
        }
        return exp;
    }

    public Expense updateExpense(Long id, Expense updated, String email) {
        Expense existing = getExpenseById(id, email);
        existing.setTitle(updated.getTitle());
        existing.setCategory(updated.getCategory());
        existing.setAmount(updated.getAmount());
        existing.setDate(updated.getDate());
        existing.setDescription(updated.getDescription());
        return expenseRepository.save(existing);
    }

    public void deleteExpense(Long id, String email) {
        Expense existing = getExpenseById(id, email);
        expenseRepository.delete(existing);
    }

    public Map<String, Object> getMonthlySummary(String email, int month, int year) {
        User user = userRepository.findByEmail(email);
        if (user == null) return Map.of("totalExpenses", 0.0, "numberOfExpenses", 0, "averageExpense", 0.0);

        List<Expense> expenses = expenseRepository.findByUserAndMonthAndYear(user, month, year);
        double total = expenses.stream().mapToDouble(e -> e.getAmount() == null ? 0.0 : e.getAmount()).sum();
        double average = expenses.isEmpty() ? 0.0 : total / expenses.size();

        Map<String, Object> summary = new HashMap<>();
        summary.put("totalExpenses", total);
        summary.put("numberOfExpenses", expenses.size());
        summary.put("averageExpense", average);
        return summary;
    }
}
