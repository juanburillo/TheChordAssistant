package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.google.gson.Gson;

import model.Chord;

public class DaoChord {

	private Connection con = null;
	private static DaoChord instance = null;

	public DaoChord() throws SQLException {
		con = DBConnection.getConnection();
	}

	public static DaoChord getInstance() throws SQLException {
		if (instance == null) {
			instance = new DaoChord();
		}
		return instance;
	}

	private ArrayList<Chord> listAll(String nameFilter) throws SQLException {
		PreparedStatement ps = con.prepareStatement("SELECT * FROM chords");
		ResultSet rs = ps.executeQuery();

		ArrayList<Chord> result = null;

		while (rs.next()) {
			if (result == null) {
				result = new ArrayList<>();
			}
			if (nameFilter == null || rs.getString("name").equals(nameFilter)) {
				result.add(new Chord(rs.getInt("id"), rs.getString("name"), rs.getString("quality"), rs.getString("description"), rs.getString("fundamentalImage"), rs.getString("firstInversionImage"), rs.getString("secondInversionImage"), rs.getString("featuredSong")));
			}
		}

		return result;
	}

	public String getJson() throws SQLException {
		String json = "";
		Gson gson = new Gson();
		json = gson.toJson(listAll(null));
		return json;
	}

	public String getJson(String nameFilter) throws SQLException {
		String json = "";
		Gson gson = new Gson();
		json = gson.toJson(listAll(nameFilter));
		return json;
	}

}
