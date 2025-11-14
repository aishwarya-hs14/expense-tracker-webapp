package com.example.expensetracker.controller;

import com.example.expensetracker.model.Expense;
import com.example.expensetracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "*")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    // Get all expenses for logged-in user
    @GetMapping
    public List<Expense> getExpenses(Authentication authentication) {
        String email = (String) authentication.getPrincipal();
        return expenseService.getUserExpenses(email);
    }

    // Get single expense by id (only if belongs to user)
    @GetMapping("/{id}")
    public ResponseEntity<Expense> getExpense(@PathVariable Long id, Authentication authentication) {
        String email = (String) authentication.getPrincipal();
        Expense exp = expenseService.getExpenseById(id, email);
        return ResponseEntity.ok(exp);
    }

    // Add expense for logged-in user
    @PostMapping
    public ResponseEntity<Expense> addExpense(@RequestBody Expense expense, Authentication authentication) {
        String email = (String) authentication.getPrincipal();
        Expense saved = expenseService.addExpenseForUser(expense, email);
        return ResponseEntity.ok(saved);
    }

    // Update
    @PutMapping("/{id}")
    public ResponseEntity<Expense> updateExpense(@PathVariable Long id,
                                                 @RequestBody Expense expense,
                                                 Authentication authentication) {
        String email = (String) authentication.getPrincipal();
        Expense updated = expenseService.updateExpense(id, expense, email);
        return ResponseEntity.ok(updated);
    }

    // Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteExpense(@PathVariable Long id, Authentication authentication) {
        String email = (String) authentication.getPrincipal();
        expenseService.deleteExpense(id, email);
        return ResponseEntity.ok(Map.of("message", "Deleted"));
    }

    // Monthly summary
    @GetMapping("/summary")
    public Map<String, Object> getMonthlySummary(
            @RequestParam int month,
            @RequestParam int year,
            Authentication authentication) {

        String email = (String) authentication.getPrincipal();
        return expenseService.getMonthlySummary(email, month, year);
    }
}
