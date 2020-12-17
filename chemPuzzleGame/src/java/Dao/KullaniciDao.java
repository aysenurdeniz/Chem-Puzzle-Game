/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dao;

import Entity.Kullanici;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author aysenurdeniz
 */
@Stateless
public class KullaniciDao extends AbstractDAO<Kullanici> {

    @PersistenceContext(unitName = "chemPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public KullaniciDao() {
        super(Kullanici.class);
    }

    public Kullanici login(String username, String password) {
        Query query = em.createQuery("select k from Kullanici k where k.kullaniciadi = :username and k.sifre = :password");
        query.setParameter("kullaniciadi", username);
        query.setParameter("sifre", password);

        List<Kullanici> result = query.getResultList();

        if (result != null && result.size() > 0) {
            return result.get(0);
        }
        return null;
    }

}
