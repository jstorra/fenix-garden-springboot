package com.campus.fenixgarden.models;

import com.campus.fenixgarden.models.dtos.GamaProductDTO;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "gama_producto")
public class GamaProduct {
    @Id
    @Column(name = "gama", nullable = false)
    private String gama;

    @Column(name = "descripcion_texto")
    private String textDescription;

    @Column(name = "descripcion_html")
    private String htmlDescription;

    @Column(name = "imagen")
    private String image;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "gamaProduct", cascade = CascadeType.ALL)
    private List<Product> products;

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

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public GamaProductDTO toDTO(){
        GamaProductDTO dto = new GamaProductDTO();
        dto.setGama(this.gama);
        dto.setTextDescription(this.textDescription != null ? this.textDescription : null);
        dto.setHtmlDescription(this.htmlDescription != null ? this.htmlDescription : null);
        dto.setImage(this.image != null ? this.image : null);

        List<String> productCodes = new ArrayList<>();

        for (Product product : this.getProducts()) {
            productCodes.add(product.getProductCode());
        }

        dto.setProductCodes(productCodes);

        return dto;
    }

    @Override
    public String toString() {
        return "GamaProduct{" +
                "gama='" + gama + '\'' +
                ", textDescription='" + textDescription + '\'' +
                ", htmlDescription='" + htmlDescription + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}
