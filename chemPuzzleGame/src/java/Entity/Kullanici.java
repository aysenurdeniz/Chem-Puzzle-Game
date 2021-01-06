package Entity;

import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author anurd
 */
@Entity
@Table(name = "kullanici")
public class Kullanici implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private String kullaniciadi;
    private String sifre;

    @ManyToOne(fetch = FetchType.LAZY)
    private Yetki yetki;

    public Kullanici() {
    }

    public Kullanici(Long id, String kullaniciadi, String sifre, Yetki yetki) {
        this.id = id;
        this.kullaniciadi = kullaniciadi;
        this.sifre = sifre;
        this.yetki = yetki;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getKullaniciadi() {
        return kullaniciadi;
    }

    public void setKullaniciadi(String kullaniciadi) {
        this.kullaniciadi = kullaniciadi;
    }

    public String getSifre() {
        return sifre;
    }

    public void setSifre(String sifre) {
        this.sifre = sifre;
    }

    public Yetki getYetki() {
        return yetki;
    }

    public void setYetki(Yetki yetki) {
        this.yetki = yetki;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 89 * hash + Objects.hashCode(this.id);
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
        final Kullanici other = (Kullanici) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Kullanici{" + "id=" + id + ", kullaniciadi=" + kullaniciadi + ", sifre=" + sifre + ", yetki=" + yetki + '}';
    }

}
