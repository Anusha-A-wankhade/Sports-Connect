package com.app.sportsConnect.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/admin/**").hasRole("ADMIN")
                // Allow GET requests to /api/fixtures/** for all users
                .requestMatchers(HttpMethod.GET, "/api/fixtures/**").permitAll()
                // Restrict POST, PUT, PATCH requests to /api/fixtures/** to ADMIN users only
                .requestMatchers(HttpMethod.POST, "/api/fixtures/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.PUT, "/api/fixtures/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.PATCH, "/api/fixtures/**").hasRole("ADMIN")
                .anyRequest().permitAll()
            )
            .formLogin(form -> form
                .loginPage("/login") // Your custom login page URL
                .permitAll()
            )
            .httpBasic(httpBasic -> {}); // If you need HTTP Basic authentication

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails admin = User.withUsername("admin")
                                .password(passwordEncoder().encode("password"))
                                .roles("ADMIN")
                                .build();
        // No USER role users as per your requirements
        return new InMemoryUserDetailsManager(admin);
    }
}
