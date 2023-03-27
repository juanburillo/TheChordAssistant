package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.google.gson.Gson;

import model.Post;
import model.User;

public class DaoPost {
	private Connection con = null;
	public static DaoPost instance = null;

	public DaoPost() throws SQLException {
		con = DBConnection.getConnection();
	}

	public static DaoPost getInstance() throws SQLException {
		if (instance == null)
			instance = new DaoPost();
		return instance;
	}

	public void insert(Post p) throws SQLException {

		PreparedStatement p1 = con.prepareStatement("INSERT INTO posts (titulo, contenido, foto) VALUES(?,?,?)");
		p1.setString(1, p.getTitulo());
		p1.setString(2, p.getContenido());
		p1.setString(3, p.getFoto());
		p1.executeUpdate();
		p1.close();

	}

	public ArrayList<User> getAll() throws SQLException {
		PreparedStatement ps = con.prepareStatement("SELECT * FROM posts");
		ResultSet rs = ps.executeQuery();
		ArrayList<User> result = null;

		while (rs.next()) {
			if (result == null) {
				result = new ArrayList<>();
			}
			result.add(new User(rs.getString("titulo"), rs.getString("contenido"), rs.getString("foto")));
		}
		rs.close();
		ps.close();
		return result;
	}

	public String getJson() throws SQLException {
		Gson gson = new Gson();
		String json = gson.toJson(this.getAll());
		return json;
	}
}
