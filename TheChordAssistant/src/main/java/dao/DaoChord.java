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

	private ArrayList<Chord> listAll(int idFilter) throws SQLException {
		PreparedStatement ps = con.prepareStatement("SELECT * FROM chords");
		ResultSet rs = ps.executeQuery();

		ArrayList<Chord> result = null;

		while (rs.next()) {
			if (result == null) {
				result = new ArrayList<>();
			}
			if (idFilter == 0 || rs.getInt("id") == idFilter) {
				result.add(new Chord(rs.getInt("id"), rs.getString("name"), rs.getString("quality"),
						rs.getString("description"), rs.getString("image"), rs.getString("featuredSong"),
						rs.getString("scale1"), rs.getString("scale2"), rs.getString("scale3")));
			}
		}

		return result;
	}

	public String getJson() throws SQLException {
		String json = "";
		Gson gson = new Gson();
		json = gson.toJson(listAll(0));
		return json;
	}

	public String getJson(int idFliter) throws SQLException {
		String json = "";
		Gson gson = new Gson();
		json = gson.toJson(listAll(idFliter));
		return json;
	}

}
