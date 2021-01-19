/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import Dao.YetkiDao;
import Entity.Yetki;
import java.io.Serializable;
import java.util.List;
import javax.ejb.EJB;
import javax.faces.view.ViewScoped;
import javax.inject.Named;

/**
 *
 * @author anurd
 */
@Named("yetkiCont")
@ViewScoped
public class YetkiController implements Serializable {

    private Yetki yetki;
    @EJB
    private YetkiDao dao;

    public void create() {
        this.dao.create(yetki);
        this.yetki = new Yetki();
    }

    public List<Yetki> getRead() {
        return this.dao.findAll();
    }

    public void updateForm(Yetki c) {
        this.yetki = c;
    }

    public void update() {
        this.dao.edit(yetki);
        this.yetki = new Yetki();
    }

    public void delete(Yetki c) {
        this.dao.remove(c);
    }

    public Yetki getYetki() {
        if(this.yetki == null){
            return this.yetki = new Yetki();
        }
        return yetki;
    }

    public void setYetki(Yetki yetki) {
        this.yetki = yetki;
    }

}
