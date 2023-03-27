package controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.SQLException;

import dao.DaoPost;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;
import model.Post;

/**
 * Servlet implementation class Foro
 */
@MultipartConfig
public class Forum extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String pathFiles = "C:\\Users\\juanb\\Desktop\\DAW\\Proyectos\\ProyectoIntegrador\\Web\\TheChordAssistant\\src\\main\\webapp\\fotos";
	private File uploads = new File(pathFiles);

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Forum() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			PrintWriter mostar = response.getWriter();
			mostar.print(DaoPost.getInstance().getJson());
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String titulo = request.getParameter("titulo");
		String contenido = request.getParameter("contenido");

		Part part = request.getPart("foto");
		Path path = Paths.get(part.getSubmittedFileName());
		String fileName = path.getFileName().toString();
		InputStream input = part.getInputStream();
		String ruta = "";
		if (input != null) {
			File file = new File(uploads, fileName);
			ruta = file.getName();
			try {
				Files.copy(input, file.toPath());
			} catch (Exception e) {
				System.out.println("Error al copiar la foto.");
			}
		}

		Post p = new Post(titulo, contenido, ruta);
		try {
			p.insert();
			response.sendRedirect("MostrarForo.html");
		} catch (SQLException e) {
			e.printStackTrace();
		}

	}

}
