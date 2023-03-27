package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.google.gson.Gson;

import model.User;

public class DaoUser {

	private Connection con = null;
	public static DaoUser instance = null;

	public DaoUser() throws SQLException {
		con = DBConnection.getConnection();
	}

	public static DaoUser getInstance() throws SQLException {
		if (instance == null)
			instance = new DaoUser();
		return instance;
	}

	public void insert(User u) throws SQLException {

		PreparedStatement p1 = con.prepareStatement("INSERT INTO users (username, password, email) VALUES(?,?,?)");
		p1.setString(1, u.getUsername());
		p1.setString(2, u.getPassword());
		p1.setString(3, u.getEmail());
		p1.executeUpdate();
		p1.close();

	}

	public ArrayList<User> getAll() throws SQLException {
		PreparedStatement ps = con.prepareStatement("SELECT * FROM users");
		ResultSet rs = ps.executeQuery();
		ArrayList<User> result = null;

		while (rs.next()) {
			if (result == null) {
				result = new ArrayList<>();
			}
			result.add(new User(rs.getString("username"), rs.getString("password"), rs.getString("email")));
		}
		rs.close();
		ps.close();
		return result;
	}
	
	public String getJson() throws SQLException{
		Gson gson = new Gson();
		String json = gson.toJson(this.getAll());
		return json;
	}

}
