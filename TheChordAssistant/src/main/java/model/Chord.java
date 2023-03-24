package model;

public class Chord {

	// Attributes
	private int id;
	private String name;
	private String quality;

	// Constructors
	public Chord() {

	}

	public Chord(String name, String quality) {
		this.name = name;
		this.quality = quality;
	}

	public Chord(int id, String name, String quality) {
		this.id = id;
		this.name = name;
		this.quality = quality;
	}

	// Getters & Setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getQuality() {
		return quality;
	}

	public void setQuality(String quality) {
		this.quality = quality;
	}

	// Otros Métodos
	@Override
	public String toString() {
		return "Chord [id=" + id + ", name=" + name + ", quality=" + quality + "]";
	}

}
