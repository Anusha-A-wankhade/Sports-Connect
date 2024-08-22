package com.app.sportsConnect.service;

import com.app.sportsConnect.entity.*;
import com.app.sportsConnect.exceptions.ResourceNotFoundException;
import com.app.sportsConnect.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

@Service
public class FixtureService {

    @Autowired
    private CricketFixtureRepository cricketFixtureRepository;

    @Autowired
    private FootballFixtureRepository footballFixtureRepository;

    @Autowired
    private VolleyballFixtureRepository volleyballFixtureRepository;

    @Autowired
    private BasketballFixtureRepository basketballFixtureRepository;

    @Autowired
    private KabaddiFixtureRepository kabaddiFixtureRepository;

    // Cricket Services
    @PreAuthorize("hasRole('ADMIN')")
    public CricketFixture saveCricketFixture(CricketFixture fixture) {
        return cricketFixtureRepository.save(fixture);
    }

    public List<CricketFixture> getAllCricketFixtures() {
        return cricketFixtureRepository.findAll();
    }

    @PreAuthorize("hasRole('ADMIN')")
    public CricketFixture updateCricketFixture(Long matchId, Map<String, Object> updatedFixture) throws ResourceNotFoundException {
        CricketFixture existingFixture = cricketFixtureRepository.findById(matchId)
                .orElseThrow(() -> new ResourceNotFoundException("Fixture Not Found"));

        updatedFixture.forEach((key, value) -> {
            Field field = ReflectionUtils.findField(CricketFixture.class, key);
            if (field != null) {
                field.setAccessible(true);
                ReflectionUtils.setField(field, existingFixture, value);
            }
        });

        return cricketFixtureRepository.save(existingFixture);
    }

    @PreAuthorize("hasRole('ADMIN')")
    public void deleteCricketFixture(Long matchId) throws ResourceNotFoundException {
        cricketFixtureRepository.deleteById(matchId);
    }

    // Football Services
    @PreAuthorize("hasRole('ADMIN')")
    public FootballFixture saveFootballFixture(FootballFixture fixture) {
        return footballFixtureRepository.save(fixture);
    }

    public List<FootballFixture> getAllFootballFixtures() {
        return footballFixtureRepository.findAll();
    }

    @PreAuthorize("hasRole('ADMIN')")
    public FootballFixture updateFootballFixture(Long matchId, FootballFixture updatedFixture) {
        if (footballFixtureRepository.existsById(matchId)) {
            updatedFixture.setMatchId(matchId);
            return footballFixtureRepository.save(updatedFixture);
        }
        return null;
    }

    @PreAuthorize("hasRole('ADMIN')")
    public void deleteFootballFixture(Long matchId) throws ResourceNotFoundException {
        footballFixtureRepository.deleteById(matchId);
    }

    // Volleyball Services
    @PreAuthorize("hasRole('ADMIN')")
    public VolleyballFixture saveVolleyballFixture(VolleyballFixture fixture) {
        return volleyballFixtureRepository.save(fixture);
    }

    public List<VolleyballFixture> getAllVolleyballFixtures() {
        return volleyballFixtureRepository.findAll();
    }

    @PreAuthorize("hasRole('ADMIN')")
    public VolleyballFixture updateVolleyballFixture(Long matchId, Map<String, Object> updatedFixture) throws ResourceNotFoundException {
        VolleyballFixture existingFixture = volleyballFixtureRepository.findById(matchId)
                .orElseThrow(() -> new ResourceNotFoundException("Fixture Not Found"));

        updatedFixture.forEach((key, value) -> {
            Field field = ReflectionUtils.findField(VolleyballFixture.class, key);
            if (field != null) {
                field.setAccessible(true);
                ReflectionUtils.setField(field, existingFixture, value);
            }
        });

        return volleyballFixtureRepository.save(existingFixture);
    }

    @PreAuthorize("hasRole('ADMIN')")
    public void deleteVolleyballFixture(Long matchId) throws ResourceNotFoundException {
        volleyballFixtureRepository.deleteById(matchId);
    }

    // Basketball Services
    @PreAuthorize("hasRole('ADMIN')")
    public BasketballFixture saveBasketballFixture(BasketballFixture fixture) {
        return basketballFixtureRepository.save(fixture);
    }

    public List<BasketballFixture> getAllBasketballFixtures() {
        return basketballFixtureRepository.findAll();
    }

    @PreAuthorize("hasRole('ADMIN')")
    public BasketballFixture updateBasketballFixture(Long matchId, Map<String, Object> updatedFixture) throws ResourceNotFoundException {
        BasketballFixture existingFixture = basketballFixtureRepository.findById(matchId)
                .orElseThrow(() -> new ResourceNotFoundException("Fixture Not Found"));

        updatedFixture.forEach((key, value) -> {
            Field field = ReflectionUtils.findField(BasketballFixture.class, key);
            if (field != null) {
                field.setAccessible(true);
                ReflectionUtils.setField(field, existingFixture, value);
            }
        });

        return basketballFixtureRepository.save(existingFixture);
    }

    @PreAuthorize("hasRole('ADMIN')")
    public void deleteBasketballFixture(Long matchId) throws ResourceNotFoundException {
        basketballFixtureRepository.deleteById(matchId);
    }

    // Kabaddi Services
    @PreAuthorize("hasRole('ADMIN')")
    public KabaddiFixture saveKabaddiFixture(KabaddiFixture fixture) {
        return kabaddiFixtureRepository.save(fixture);
    }

    public List<KabaddiFixture> getAllKabaddiFixtures() {
        return kabaddiFixtureRepository.findAll();
    }

    @PreAuthorize("hasRole('ADMIN')")
    public KabaddiFixture updateKabaddiFixture(Long matchId, Map<String, Object> updatedFixture) throws ResourceNotFoundException {
        KabaddiFixture existingFixture = kabaddiFixtureRepository.findById(matchId)
                .orElseThrow(() -> new ResourceNotFoundException("Fixture Not Found"));

        updatedFixture.forEach((key, value) -> {
            Field field = ReflectionUtils.findField(KabaddiFixture.class, key);
            if (field != null) {
                field.setAccessible(true);
                ReflectionUtils.setField(field, existingFixture, value);
            }
        });

        return kabaddiFixtureRepository.save(existingFixture);
    }

    @PreAuthorize("hasRole('ADMIN')")
    public void deleteKabaddiFixture(Long matchId) throws ResourceNotFoundException {
        kabaddiFixtureRepository.deleteById(matchId);
    }
}
