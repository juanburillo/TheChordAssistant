package model;

import java.sql.SQLException;

import dao.DaoPost;

public class Post {

	// Attributes
	private int id;
	private String titulo;
	private String contenido;
	private String foto;
	
	// Constructors
	public Post() {
		
	}
	
	public Post(String titulo, String contenido, String foto) {
		this.titulo = titulo;
		this.contenido = contenido;
		this.foto = foto;
	}

	public Post(int id, String titulo, String contenido, String foto) {
		this.id = id;
		this.titulo = titulo;
		this.contenido = contenido;
		this.foto = foto;
	}

	// Getters & Setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getContenido() {
		return contenido;
	}

	public void setContenido(String contenido) {
		this.contenido = contenido;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	// Other Methods
	@Override
	public String toString() {
		return "Post [id=" + id + ", titulo=" + titulo + ", contenido=" + contenido + ", foto=" + foto + "]";
	}
	
	public void insert() throws SQLException {
		DaoPost.getInstance().insert(this);
	}
	
}
