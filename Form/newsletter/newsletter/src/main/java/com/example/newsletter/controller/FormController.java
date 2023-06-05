package com.example.newsletter.controller;

import com.example.newsletter.model.FormData;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/")
public class FormController {

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody FormData formData) {
        String username = formData.getUsername();
        String email = formData.getEmail();
        try {
            // something with data
            return ResponseEntity.ok("Form submitted successfully! " + "Username: " + username + " " + " Email: " + email);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + e.getMessage());
        }
    }
}
