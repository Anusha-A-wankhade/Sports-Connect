package com.app.sportsConnect.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class FootballFixture extends Fixture {
	private String Team1Score;
    private String Team2Score;
    private String matchType;
	public String getTeam1Score() {
		return Team1Score;
	}
	public void setTeam1Score(String team1Score) {
		Team1Score = team1Score;
	}
	public String getTeam2Score() {
		return Team2Score;
	}
	public void setTeam2Score(String team2Score) {
		Team2Score = team2Score;
	}
	public String getMatchType() {
		return matchType;
	}
	public void setMatchType(String matchType) {
		this.matchType = matchType;
	}

	
}
