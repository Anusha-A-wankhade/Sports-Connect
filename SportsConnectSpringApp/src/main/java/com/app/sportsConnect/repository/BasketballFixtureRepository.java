package com.app.sportsConnect.repository;

import com.app.sportsConnect.entity.BasketballFixture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BasketballFixtureRepository extends JpaRepository<BasketballFixture, Long> {
}
