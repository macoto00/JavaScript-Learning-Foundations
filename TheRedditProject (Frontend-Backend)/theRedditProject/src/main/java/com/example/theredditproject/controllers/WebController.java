package com.example.theredditproject.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class WebController {
    @GetMapping("")
    public String homePage() {
        return "index";
    }
    @GetMapping("/createPost")
    public String createPage() {
        return "newPost.html";
    }
    @GetMapping("/updatePost")
    public String updatePage() {
        return "updatePost.html";
    }
}
