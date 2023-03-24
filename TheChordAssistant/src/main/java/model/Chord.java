package model;

public class Chord {

	// Attributes
	private int id;
	private String name;
	private String quality;
	private String description;
	private String image;
	private String featuredSong;

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

	public Chord(int id, String name, String quality, String description, String image, String featuredSong) {
		this.id = id;
		this.name = name;
		this.quality = quality;
		this.description = description;
		this.image = image;
		this.featuredSong = featuredSong;
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getFeaturedSong() {
		return featuredSong;
	}

	public void setFeaturedSong(String featuredSong) {
		this.featuredSong = featuredSong;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
