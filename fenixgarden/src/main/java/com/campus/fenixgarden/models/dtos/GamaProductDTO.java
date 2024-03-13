package com.campus.fenixgarden.models.dtos;

import java.util.List;

public class GamaProductDTO {
    private String gama;
    private String textDescription;
    private String htmlDescription;
    private String image;
    private List<String> productCodes;

    // Constructor vacío
    public GamaProductDTO() {}

    // Getters y setters
    public String getGama() {
        return gama;
    }

    public void setGama(String gama) {
        this.gama = gama;
    }

    public String getTextDescription() {
        return textDescription;
    }

    public void setTextDescription(String textDescription) {
        this.textDescription = textDescription;
    }

    public String getHtmlDescription() {
        return htmlDescription;
    }

    public void setHtmlDescription(String htmlDescription) {
        this.htmlDescription = htmlDescription;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<String> getProductCodes() {
        return productCodes;
    }

    public void setProductCodes(List<String> productCodes) {
        this.productCodes = productCodes;
    }
}
