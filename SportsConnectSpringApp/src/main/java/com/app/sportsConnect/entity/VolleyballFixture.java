package com.app.sportsConnect.entity;

import jakarta.persistence.*;

@Entity
public class VolleyballFixture extends Fixture {
    private String setScores;
    private String matchType;

    // Getters and Setters
    public String getSetScores() {
        return setScores;
    }

    public void setSetScores(String setScores) {
        this.setScores = setScores;
    }

    public String getMatchType() {
        return matchType;
    }

    public void setMatchType(String matchType) {
        this.matchType = matchType;
    }

    @Override
    public String toString() {
        return "VolleyballFixture{" +
                "setScores='" + setScores + '\'' +
                ", matchType='" + matchType + '\'' +
                '}';
    }
}
