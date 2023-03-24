package model;

public class Chord {

	// Attributes
	private int id;
	private String name;
	private String quality;
	private String description;
	private String fundamentalImage;
	private String firstInversionImage;
	private String secondInversionImage;
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

	public Chord(int id, String name, String quality, String description, String fundamentalImage, String firstInversionImage, String secondInversionImage, String featuredSong) {
		this.id = id;
		this.name = name;
		this.quality = quality;
		this.description = description;
		this.fundamentalImage = fundamentalImage;
		this.firstInversionImage = firstInversionImage;
		this.secondInversionImage = secondInversionImage;
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

	public String getFundamentalImage() {
		return fundamentalImage;
	}

	public void setFundamentalImage(String fundamentalImage) {
		this.fundamentalImage = fundamentalImage;
	}

	public String getFirstInversionImage() {
		return firstInversionImage;
	}

	public void setFirstInversionImage(String firstInversionImage) {
		this.firstInversionImage = firstInversionImage;
	}

	public String getSecondInversionImage() {
		return secondInversionImage;
	}

	public void setSecondInversionImage(String secondInversionImage) {
		this.secondInversionImage = secondInversionImage;
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
