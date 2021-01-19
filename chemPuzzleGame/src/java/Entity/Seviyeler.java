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
@Table(name = "seviyeler")
public class Seviyeler implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private String seviyeismi;

    @OneToMany(mappedBy = "seviyeler", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Dosya> dosyas;

    @OneToMany(mappedBy = "seviyeler", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Istatistik> istatistiks;

    public Seviyeler() {
    }

    public Seviyeler(Long id, String seviyeismi, List<Dosya> dosyas, List<Istatistik> istatistiks) {
        this.id = id;
        this.seviyeismi = seviyeismi;
        this.dosyas = dosyas;
        this.istatistiks = istatistiks;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSeviyeismi() {
        return seviyeismi;
    }

    public void setSeviyeismi(String seviyeismi) {
        this.seviyeismi = seviyeismi;
    }

    public List<Dosya> getDosyas() {
        return dosyas;
    }

    public void setDosyas(List<Dosya> dosyas) {
        this.dosyas = dosyas;
    }

    public List<Istatistik> getIstatistiks() {
        return istatistiks;
    }

    public void setIstatistiks(List<Istatistik> istatistiks) {
        this.istatistiks = istatistiks;
    }

    @Override
    public int hashCode() {
        int hash = 7;
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
        final Seviyeler other = (Seviyeler) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Seviyeler{" + "id=" + id + ", seviyeismi=" + seviyeismi + ", dosyas=" + dosyas + ", istatistiks=" + istatistiks + '}';
    }

}
