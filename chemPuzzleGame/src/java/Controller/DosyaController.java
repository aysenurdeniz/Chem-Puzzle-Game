/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import Dao.DosyaDao;
import Entity.Dosya;
import java.io.Serializable;
import java.util.List;
import javax.ejb.EJB;
import javax.faces.view.ViewScoped;
import javax.inject.Named;

/**
 *
 * @author anurd
 */
@Named("dosyaCont")
@ViewScoped
public class DosyaController implements Serializable {

    private Dosya dosya;
    @EJB
    private DosyaDao dao;
    
    private String yukle = "d:\\upload\\";

    public void create() {
        this.dao.create(dosya);
        this.dosya = new Dosya();
    }

    public List<Dosya> getRead() {
        return this.dao.findAll();
    }

    public void updateForm(Dosya c) {
        this.dosya = c;
    }

    public void update() {
        this.dao.edit(dosya);
        this.dosya = new Dosya();
    }

    public void delete(Dosya c) {
        this.dao.remove(c);
    }

    public Dosya getDosya() {
        if (this.dosya == null) {
            return this.dosya = new Dosya();
        }
        return dosya;
    }

    public void setDosya(Dosya dosya) {
        this.dosya = dosya;
    }

    public String getYukle() {
        return yukle;
    }

    public void setYukle(String yukle) {
        this.yukle = yukle;
    }

}
