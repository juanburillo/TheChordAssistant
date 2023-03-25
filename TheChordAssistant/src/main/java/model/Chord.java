package model;

public class Chord {

	// Attributes
	private int id;
	private String name;
	private String quality;
	private String description;
	private String image;
	private String featuredSong;
	private String scale1;
	private String scale2;
	private String scale3;

	// Constructors
	public Chord() {

	}

	public Chord(String name, String quality, String description, String image, String featuredSong,
			String scale1, String scale2, String scale3) {
		this.name = name;
		this.quality = quality;
		this.description = description;
		this.image = image;
		this.featuredSong = featuredSong;
		this.scale1 = scale1;
		this.scale2 = scale2;
		this.scale3 = scale3;
	}
	
	public Chord(int id, String name, String quality, String description, String image, String featuredSong,
			String scale1, String scale2, String scale3) {
		this.id = id;
		this.name = name;
		this.quality = quality;
		this.description = description;
		this.image = image;
		this.featuredSong = featuredSong;
		this.scale1 = scale1;
		this.scale2 = scale2;
		this.scale3 = scale3;
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

	public String getScale1() {
		return scale1;
	}

	public void setScale1(String scale1) {
		this.scale1 = scale1;
	}

	public String getScale2() {
		return scale2;
	}

	public void setScale2(String scale2) {
		this.scale2 = scale2;
	}

	public String getScale3() {
		return scale3;
	}

	public void setScale3(String scale3) {
		this.scale3 = scale3;
	}
	
}
