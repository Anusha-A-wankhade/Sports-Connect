package com.app.sportsConnect.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.app.sportsConnect.entity.*;
import com.app.sportsConnect.exceptions.ResourceNotFoundException;
import com.app.sportsConnect.service.FixtureService;

@RestController
@RequestMapping("/api/fixtures")
public class FixtureController {

    @Autowired
    private FixtureService fixtureService;

    // Create a new cricket fixture (ADMIN only)
    @PostMapping("/cricket")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CricketFixture> createCricketFixture(@RequestBody CricketFixture fixture) {
        CricketFixture savedFixture = fixtureService.saveCricketFixture(fixture);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedFixture);
    }

    // Get all cricket fixtures (accessible to all)
    @GetMapping("/cricket")
    public ResponseEntity<List<CricketFixture>> getAllCricketFixtures() {
        List<CricketFixture> fixtures = fixtureService.getAllCricketFixtures();
        return ResponseEntity.ok(fixtures);
    }

    // Update a specific cricket fixture (ADMIN only)
    @PatchMapping("/cricket/{matchId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CricketFixture> updateCricketFixture(@PathVariable Long matchId, @RequestBody Map<String, Object> updatedFixture) {
        try {
            CricketFixture fixture = fixtureService.updateCricketFixture(matchId, updatedFixture);
            return ResponseEntity.ok(fixture);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/cricket/{matchId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CricketFixture> updateCricketFixture(@PathVariable Long matchId) {
        try {
            fixtureService.deleteCricketFixture(matchId);
            return ResponseEntity.noContent().build();
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // Create a new football fixture (ADMIN only)
    @PostMapping("/football")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<FootballFixture> createFootballFixture(@RequestBody FootballFixture fixture) {
        FootballFixture savedFixture = fixtureService.saveFootballFixture(fixture);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedFixture);
    }

    // Get all football fixtures (accessible to all)
    @GetMapping("/football")
    public ResponseEntity<List<FootballFixture>> getAllFootballFixtures() {
        List<FootballFixture> fixtures = fixtureService.getAllFootballFixtures();
        return ResponseEntity.ok(fixtures);
    }

    // Update a specific football fixture (ADMIN only)
    @PutMapping("/football/{matchId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<FootballFixture> updateFootballFixture(@PathVariable Long matchId, @RequestBody FootballFixture updatedFixture) {
        try {
            FootballFixture fixture = fixtureService.updateFootballFixture(matchId, updatedFixture);
            if (fixture != null) {
                return ResponseEntity.ok(fixture);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/football/{matchId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<FootballFixture> updateFootballFixture(@PathVariable Long matchId) {
        try {
            fixtureService.deleteFootballFixture(matchId);
            return ResponseEntity.noContent().build();
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // Create a new volleyball fixture (ADMIN only)
    @PostMapping("/volleyball")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<VolleyballFixture> createVolleyballFixture(@RequestBody VolleyballFixture fixture) {
        VolleyballFixture savedFixture = fixtureService.saveVolleyballFixture(fixture);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedFixture);
    }

    // Get all volleyball fixtures (accessible to all)
    @GetMapping("/volleyball")
    public ResponseEntity<List<VolleyballFixture>> getAllVolleyballFixtures() {
        List<VolleyballFixture> fixtures = fixtureService.getAllVolleyballFixtures();
        return ResponseEntity.ok(fixtures);
    }

    // Update a specific volleyball fixture (ADMIN only)
    @PatchMapping("/volleyball/{matchId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<VolleyballFixture> updateVolleyballFixture(@PathVariable Long matchId, @RequestBody Map<String, Object> updatedFixture) {
        try {
            VolleyballFixture fixture = fixtureService.updateVolleyballFixture(matchId, updatedFixture);
            return ResponseEntity.ok(fixture);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/volleyball/{matchId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<VolleyballFixture> updateVolleyballFixture(@PathVariable Long matchId) {
        try {
            fixtureService.deleteVolleyballFixture(matchId);
            return ResponseEntity.noContent().build();
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // Create a new basketball fixture (ADMIN only)
    @PostMapping("/basketball")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<BasketballFixture> createBasketballFixture(@RequestBody BasketballFixture fixture) {
        BasketballFixture savedFixture = fixtureService.saveBasketballFixture(fixture);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedFixture);
    }

    // Get all basketball fixtures (accessible to all)
    @GetMapping("/basketball")
    public ResponseEntity<List<BasketballFixture>> getAllBasketballFixtures() {
        List<BasketballFixture> fixtures = fixtureService.getAllBasketballFixtures();
        return ResponseEntity.ok(fixtures);
    }

    // Update a specific basketball fixture (ADMIN only)
    @PatchMapping("/basketball/{matchId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<BasketballFixture> updateBasketballFixture(@PathVariable Long matchId, @RequestBody Map<String, Object> updatedFixture) {
        try {
            BasketballFixture fixture = fixtureService.updateBasketballFixture(matchId, updatedFixture);
            return ResponseEntity.ok(fixture);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/basketball/{matchId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<BasketballFixture> updateBasketballFixture(@PathVariable Long matchId) {
        try {
            fixtureService.deleteBasketballFixture(matchId);
            return ResponseEntity.noContent().build();
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // Create a new kabaddi fixture (ADMIN only)
    @PostMapping("/kabaddi")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<KabaddiFixture> createKabaddiFixture(@RequestBody KabaddiFixture fixture) {
        KabaddiFixture savedFixture = fixtureService.saveKabaddiFixture(fixture);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedFixture);
    }

    // Get all kabaddi fixtures (accessible to all)
    @GetMapping("/kabaddi")
    public ResponseEntity<List<KabaddiFixture>> getAllKabaddiFixtures() {
        List<KabaddiFixture> fixtures = fixtureService.getAllKabaddiFixtures();
        return ResponseEntity.ok(fixtures);
    }

    // Update a specific kabaddi fixture (ADMIN only)
    @PatchMapping("/kabaddi/{matchId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<KabaddiFixture> updateKabaddiFixture(@PathVariable Long matchId, @RequestBody Map<String, Object> updatedFixture) {
        try {
            KabaddiFixture fixture = fixtureService.updateKabaddiFixture(matchId, updatedFixture);
            return ResponseEntity.ok(fixture);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/kabaddi/{matchId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<KabaddiFixture> updateKabaddiFixture(@PathVariable Long matchId) {
        try {
            fixtureService.deleteKabaddiFixture(matchId);
            return ResponseEntity.noContent().build();
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
