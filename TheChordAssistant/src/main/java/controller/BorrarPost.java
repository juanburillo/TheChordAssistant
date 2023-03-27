package controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import dao.DBConnection;

/**
 * Servlet implementation class BorrarForo
 */
public class BorrarPost extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public BorrarPost() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String id = request.getParameter("id");
		Connection connection = null;
		
		try {
			connection = DBConnection.getConnection();

			// Crear una sentencia SQL para eliminar el registro con el nombre proporcionado
			String sql = "DELETE FROM posts WHERE id = ?";
			PreparedStatement statement = connection.prepareStatement(sql);
			statement.setString(1, id);

			// Ejecutar la sentencia SQL para eliminar el registro
			int rowsDeleted = statement.executeUpdate();

			if (rowsDeleted > 0) {
				// Si se eliminó el registro, mostrar un mensaje de éxito
				response.getWriter().println("<h1>Post eliminado exitosamente</h1>");
				response.sendRedirect("OpcionesAdmin.html");
			} else {
				// Si no se eliminó el registro, mostrar un mensaje de error
				System.out.print("No se encontro el post ");
				System.out.println(id);
				response.sendRedirect("BajaForo.html");
			}

			// Cerrar la sentencia SQL
			statement.close();

		} catch (SQLException e) {
			// Si ocurre un error al conectar o al eliminar el registro, mostrar un mensaje de error
			System.out.println("Error de conexión.");
			response.sendRedirect("BajaForo.html");
			e.printStackTrace();
		}

	}
}
