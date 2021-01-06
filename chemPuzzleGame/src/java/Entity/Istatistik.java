/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;

/**
 *
 * @author anurd
 */
@Entity
@Table(name = "istatistik")
public class Istatistik implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Temporal(javax.persistence.TemporalType.DATE)
    private Date tarih;
    private String skor;

    @ManyToOne(fetch = FetchType.LAZY)
    private Seviyeler seviyeler;

    @ManyToOne(fetch = FetchType.LAZY)
    private Kullanici kullanici;

    public Istatistik() {
    }

    public Istatistik(Long id, Date tarih, String skor, Seviyeler seviyeler, Kullanici kullanici) {
        this.id = id;
        this.tarih = tarih;
        this.skor = skor;
        this.seviyeler = seviyeler;
        this.kullanici = kullanici;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getTarih() {
        return tarih;
    }

    public void setTarih(Date tarih) {
        this.tarih = tarih;
    }

    public String getSkor() {
        return skor;
    }

    public void setSkor(String skor) {
        this.skor = skor;
    }

    public Seviyeler getSeviyeler() {
        return seviyeler;
    }

    public void setSeviyeler(Seviyeler seviyeler) {
        this.seviyeler = seviyeler;
    }

    public Kullanici getKullanici() {
        return kullanici;
    }

    public void setKullanici(Kullanici kullanici) {
        this.kullanici = kullanici;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 97 * hash + Objects.hashCode(this.id);
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
        final Istatistik other = (Istatistik) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Istatistik{" + "id=" + id + ", tarih=" + tarih + ", skor=" + skor + ", seviyeler=" + seviyeler + ", kullanici=" + kullanici + '}';
    }

}
