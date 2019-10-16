package net.dk.webService.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by drsnkrt on 03-Oct-18.
 */
@Controller
public class TemplateController {

    @GetMapping("/")
    public String showIndexPage() {
        return "stb";
    }

    @GetMapping("/login")
    public String showLoginPage() {
        return "login";
    }

}
