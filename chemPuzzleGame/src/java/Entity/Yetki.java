/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Entity;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author anurd
 */
@Entity
@Table(name = "yetki")
public class Yetki implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private String yetkiAdi;

    @OneToMany(mappedBy = "yetki", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Kullanici> kullanicis;

    public Yetki() {
    }

    public Yetki(Long id, String yetkiAdi, List<Kullanici> kullanicis) {
        this.id = id;
        this.yetkiAdi = yetkiAdi;
        this.kullanicis = kullanicis;
    }
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getYetkiAdi() {
        return yetkiAdi;
    }

    public void setYetkiAdi(String yetkiAdi) {
        this.yetkiAdi = yetkiAdi;
    }

    public List<Kullanici> getKullanicis() {
        return kullanicis;
    }

    public void setKullanicis(List<Kullanici> kullanicis) {
        this.kullanicis = kullanicis;
    }

    @Override
    public int hashCode() {
        int hash = 5;
        hash = 37 * hash + Objects.hashCode(this.id);
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
        final Yetki other = (Yetki) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Yetki{" + "id=" + id + ", yetkiAdi=" + yetkiAdi + ", kullanicis=" + kullanicis + '}';
    }

}
