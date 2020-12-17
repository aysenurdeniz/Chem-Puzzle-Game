/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Util;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import javax.faces.application.FacesMessage;
import javax.faces.bean.SessionScoped;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.ValidatorException;
import javax.inject.Named;

/**
 *
 * @author anurd
 */
@Named("validator")
@SessionScoped
public class ValidatorController implements Serializable {

    private Collection<FacesMessage> msgList = new ArrayList<>();

    public boolean validateAdSoyad(FacesContext fc, UIComponent uı, Object v) {

        boolean isValid = true;
        msgList.clear();

        String value = (String) v;
        if (value.equals("")) {
            msgList.add(new FacesMessage("Lütfen Ad Ve Soyad Giriniz  ! "));
            isValid = false;
        }
        if (value.length() < 3 || value.length() > 20) {
            msgList.add(new FacesMessage("Ad Ve Soyad 2 den Küçük 20 dan Büyük Olamaz"));
            isValid = false;
        }

        if (!isValid) {
            throw new ValidatorException(msgList);
        } else {
            return true;
        }

    }

    public boolean validateKullaniciAdi(FacesContext fc, UIComponent uı, Object v) {

        boolean isValid = true;
        msgList.clear();

        String value = (String) v;
        if (value.equals("")) {
            msgList.add(new FacesMessage("Lütfen Kullanıcı Adı Giriniz  ! "));
            isValid = false;
        }
        if (value.length() < 3 || value.length() > 20) {
            msgList.add(new FacesMessage("Kullanıcı Adı 2 den Küçük 20 dan Büyük Olamaz"));
            isValid = false;
        }

        if (!isValid) {
            throw new ValidatorException(msgList);
        } else {
            return true;
        }

    }

    public boolean validateTelefon(FacesContext fc, UIComponent uı, Object v) {
        //  System.out.println("Val------ ----:");
        boolean isValid = true;
        msgList.clear();

        String value = (String) v;
        if (value == null || value.equals("")) {
            msgList.add(new FacesMessage("Lütfen Telefon Giriniz ! "));
            isValid = false;
        }

        if (!value.matches("\\(\\d{3}\\)\\d{3}-?\\d{4}") || value.length() > 12) {
            msgList.add(new FacesMessage("Telefon 12 karakterden den büyük olamaz ve bu (123)4567890 formatta telefon giriniz"));
            isValid = false;
        }

        if (!isValid) {
            throw new ValidatorException(msgList);
        } else {
            return true;
        }

    }

    public boolean validateEmail(FacesContext fc, UIComponent uı, Object v) {
        boolean isValid = true;
        msgList.clear();

        String value = (String) v;
        value = value.trim();

        if (value == null || value.equals("")) {
            msgList.add(new FacesMessage("Lütfen Email Giriniz Email Alanı Boş Geçilemez ! "));
            isValid = false;
        }

        if (!value.matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$")) {
            msgList.add(new FacesMessage("Lütfen Email Adresini Düzgün Giriniz! "));
            isValid = false;
        }

        if (!isValid) {
            throw new ValidatorException(msgList);

        } else {
            return true;
        }
    }

    public boolean validateBos(FacesContext fc, UIComponent uı, Object v) {
        boolean isValid = true;
        msgList.clear();

        String value = (String) v;
        value = value.trim();

        if (value == null || value.equals("")) {
            msgList.add(new FacesMessage("* Alanları boş geçilmez! "));
            isValid = false;
        }

        if (!isValid) {
            throw new ValidatorException(msgList);

        } else {
            return true;
        }
    }

    public boolean validateFlaot(FacesContext fc, UIComponent uı, Object v) {
        boolean isValid = true;
        msgList.clear();

        String value = (String) v;
        value = value.trim();

//        if (value == null || value.equals("")) {
//            msgList.add(new FacesMessage("* Alanları boş geçilmez! "));
//            isValid = false;
//        }
        if (!value.matches("^[+]?([0-9]{1,2})*[.,]([0-9]{0,2})?$")) {
            msgList.add(new FacesMessage("Sayı giriniz ! "));
            isValid = false;
        }
        if (!isValid) {
            throw new ValidatorException(msgList);

        } else {
            return true;
        }
    }

    public Collection<FacesMessage> getMsgList() {
        return msgList;
    }

    public void setMsgList(Collection<FacesMessage> msgList) {
        this.msgList = msgList;
    }

}
