/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dao;

import Entity.Yetki;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author anurd
 */
@Stateless
public class YetkiDao extends AbstractDAO<Yetki> {

    @PersistenceContext(unitName = "chemPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public YetkiDao() {
        super(Yetki.class);
    }

}
