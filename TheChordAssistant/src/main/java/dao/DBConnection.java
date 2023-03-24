package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class DBConnection {

	public static Connection instance = null;
	public static final String url = "jdbc:mysql://localhost:3306/thechordassistant";

	private DBConnection() {

	}

	public static Connection getConnection() throws SQLException {
		if (instance == null) {
			Properties props = new Properties();
			props.put("user", "root");
			props.put("password", "pass");
			instance = DriverManager.getConnection(url, props);
		}
		return instance;
	}

}
