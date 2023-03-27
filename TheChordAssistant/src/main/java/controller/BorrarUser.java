package controller;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import dao.DBConnection;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class fgt
 */
public class BorrarUser extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BorrarUser() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
		String id = request.getParameter("id");
		Connection connection = null;
		
		try {
			connection = DBConnection.getConnection();
			
			// Crear una sentencia SQL para eliminar el registro con el nombre proporcionado
			String sql = "DELETE FROM users WHERE id = ?";
			PreparedStatement statement = connection.prepareStatement(sql);
			statement.setString(1, id);
			
			// Ejecutar la sentencia SQL para eliminar el registro
			int rowsDeleted = statement.executeUpdate();
			
			if (rowsDeleted > 0) {
				// Si se eliminó el registro, mostrar un mensaje de éxito
				response.getWriter().println("<h1>Usuario eliminado exitosamente</h1>");
		        response.sendRedirect("OpcionesAdmin.html");
			} else {
				// Si no se eliminó el registro, mostrar un mensaje de error
				System.out.print("No se encontro al usuario ");
				System.out.println(id);
		        response.sendRedirect("BajaUsuarios.html");
			}
			
			// Cerrar la sentencia SQL
			statement.close();
			
		} catch (SQLException e) {
			// Si ocurre un error al conectar o al eliminar el registro, mostrar un mensaje de error
			System.out.println("Error de conexión.");
	        response.sendRedirect("BajaUsuarios.html");
			e.printStackTrace();
		}
	}

}
