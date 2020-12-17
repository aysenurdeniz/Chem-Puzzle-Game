/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import Dao.SeviyelerDao;
import Entity.Seviyeler;
import java.io.Serializable;
import java.util.List;
import javax.ejb.EJB;
import javax.faces.view.ViewScoped;
import javax.inject.Named;

/**
 *
 * @author anurd
 */
@Named("seviyelerCont")
@ViewScoped
public class SeviyelerController implements Serializable {

    private Seviyeler seviyeler;
    @EJB
    private SeviyelerDao dao;

    public void create() {
        this.dao.create(seviyeler);
        this.seviyeler = new Seviyeler();
    }

    public List<Seviyeler> getRead() {
        return this.dao.findAll();
    }

    public void updateForm(Seviyeler c) {
        this.seviyeler = c;
    }

    public void update() {
        this.dao.edit(seviyeler);
        this.seviyeler = new Seviyeler();
    }

    public void delete(Seviyeler c) {
        this.dao.remove(c);
    }

    public Seviyeler getSeviyeler() {
        if (this.seviyeler == null) {
            return this.seviyeler = new Seviyeler();
        }
        return seviyeler;
    }

    public void setSeviyeler(Seviyeler seviyeler) {
        this.seviyeler = seviyeler;
    }

}
