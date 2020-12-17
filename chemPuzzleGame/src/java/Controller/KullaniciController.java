package Controller;

import Entity.Kullanici;
import Dao.KullaniciDao;
import java.io.IOException;
import java.io.Serializable;
import java.util.List;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.faces.view.ViewScoped;

@Named("kullaniciCont")
@ViewScoped
public class KullaniciController implements Serializable {

    private Kullanici kullanici;
    @EJB
    private KullaniciDao dao;

    public void create() {
        this.dao.create(kullanici);
        this.kullanici = new Kullanici();
    }

    public List<Kullanici> getRead() {
        return this.dao.findAll();
    }

    public void updateForm(Kullanici c) {
        this.kullanici = c;
    }

    public void update() {
        this.dao.edit(kullanici);
        this.kullanici = new Kullanici();

    }

    public void delete(Kullanici c) {
        this.dao.remove(c);
    }

    public Kullanici getKullanici() {
        if (this.kullanici == null) {
            return this.kullanici = new Kullanici();
        }
        return kullanici;
    }

    public void setKullanici(Kullanici kullanici) {
        this.kullanici = kullanici;
    }
    
    public void login() throws IOException {
        FacesContext context = FacesContext.getCurrentInstance();
        Kullanici result = dao.login(kullanici.getKullaniciadi(), kullanici.getSifre());
        if (result != null) {
            try {
                context.getExternalContext().getSessionMap().put("user", kullanici.getKullaniciadi());
                kullanici = result;
                context.getExternalContext().redirect("backend/admin.xhtml");
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("kullanıcı ismi ve sifre bulunamadı."));
        }
    }

}
