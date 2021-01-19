package Util;

import Dao.KullaniciDao;
import Entity.Kullanici;
import java.io.IOException;
import java.io.Serializable;
import javax.faces.application.FacesMessage;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import javax.inject.Named;

@Named("loginController")
@SessionScoped
public class LoginController implements Serializable {

    private Kullanici kullanici;
    private KullaniciDao kullaniciDao;

    public String login() throws IOException {
        FacesContext context = FacesContext.getCurrentInstance();
        Kullanici result = kullaniciDao.login(kullanici.getUsername(), kullanici.getPassword());
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

    public KullaniciDao getKullaniciDao() {
        if (this.kullaniciDao == null) {
            this.kullaniciDao = new KullaniciDao();
        }
        return kullaniciDao;
    }

    public void setKullaniciDao(KullaniciDao kullaniciDao) {
        this.kullaniciDao = kullaniciDao;
    }

    public Kullanici getKullanici() {
        if (this.kullanici == null) {
            this.kullanici = new Kullanici();
        }
        return kullanici;
    }

    public void setKullanici(Kullanici kullanici) {
        this.kullanici = kullanici;
    }

}
