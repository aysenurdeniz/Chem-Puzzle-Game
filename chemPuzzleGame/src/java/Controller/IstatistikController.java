/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import Dao.IstatistikDao;
import Entity.Istatistik;
import java.io.Serializable;
import java.util.List;
import javax.ejb.EJB;
import javax.faces.view.ViewScoped;
import javax.inject.Named;

/**
 *
 * @author anurd
 */
@Named("istatistikCont")
@ViewScoped
public class IstatistikController implements Serializable {

    private Istatistik istatistik;
    @EJB
    private IstatistikDao dao;

    public void create() {
        this.dao.create(istatistik);
        this.istatistik = new Istatistik();
    }

    public List<Istatistik> getRead() {
        return this.dao.findAll();
    }

    public void updateForm(Istatistik c) {
        this.istatistik = c;
    }

    public void update() {
        this.dao.edit(istatistik);
        this.istatistik = new Istatistik();

    }
    
    public void delete(Istatistik c) {
        this.dao.remove(c);
    }

    public Istatistik getIstatistik() {
        if (this.istatistik == null) {
            return this.istatistik = new Istatistik();
        }
        return istatistik;
    }

    public void setIstatistik(Istatistik istatistik) {
        this.istatistik = istatistik;
    }

}
