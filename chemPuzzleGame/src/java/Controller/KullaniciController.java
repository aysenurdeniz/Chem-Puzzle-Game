package Controller;

import Dao.KullaniciDao;
import Entity.Kullanici;
import java.io.IOException;
import java.io.Serializable;
import java.util.List;
import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;
import javax.inject.Named;

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

    public String login() throws IOException {
        FacesContext context = FacesContext.getCurrentInstance();
        Kullanici result = dao.login(kullanici.getUsername(), kullanici.getPassword());
        if (result != null) {
            context.getExternalContext().getSessionMap().put("user", kullanici.getUsername());
            kullanici = result;
            switch (kullanici.getYetki().getYetkiAdi()) {
                case "admin":
                    return "/backend/admin.xhtml";
                case "user":
                    return "/backend/kullanici.xhtml";
                default:
                    return "/frontend/login.xhtml";
            }
        } else {
            FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("username and password not found"));
        }
        return null;
    }

    public void logout() {
        FacesContext context = FacesContext.getCurrentInstance();
        context.getExternalContext().invalidateSession();
        try {
            context.getExternalContext().redirect("/Son/faces/index.xhtml");
        } catch (IOException e) {
            e.getMessage();
        }
    }

}
