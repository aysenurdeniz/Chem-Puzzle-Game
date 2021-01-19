/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Entity;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author anurd
 */
@Entity
@Table(name = "dosya")
public class Dosya implements Serializable {

    public static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private String dosyaAdi;
    private String dosyaTipi;

    @Lob
    private byte[] filePath;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dosya_id")
    private Seviyeler seviyeler;

    public Dosya() {
    }

    public Dosya(Long id, String dosyaAdi, String dosyaTipi, byte[] filePath, Seviyeler seviyeler) {
        this.id = id;
        this.dosyaAdi = dosyaAdi;
        this.dosyaTipi = dosyaTipi;
        this.filePath = filePath;
        this.seviyeler = seviyeler;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDosyaAdi() {
        return dosyaAdi;
    }

    public void setDosyaAdi(String dosyaAdi) {
        this.dosyaAdi = dosyaAdi;
    }

    public String getDosyaTipi() {
        return dosyaTipi;
    }

    public void setDosyaTipi(String dosyaTipi) {
        this.dosyaTipi = dosyaTipi;
    }

    public byte[] getFilePath() {
        return filePath;
    }

    public void setFilePath(byte[] filePath) {
        this.filePath = filePath;
    }

    public Seviyeler getSeviyeler() {
        return seviyeler;
    }

    public void setSeviyeler(Seviyeler seviyeler) {
        this.seviyeler = seviyeler;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 67 * hash + Objects.hashCode(this.id);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Dosya other = (Dosya) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Dosya{" + "id=" + id + ", dosyaAdi=" + dosyaAdi + ", dosyaTipi=" + dosyaTipi + ", filePath=" + Arrays.toString(filePath) + ", seviyeler=" + seviyeler + '}';
    }

}
