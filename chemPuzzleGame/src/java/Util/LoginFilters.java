package Util;

import Entity.Kullanici;
import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebFilter("/*")
public class LoginFilters implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;

        String url = req.getRequestURI();
        Kullanici kul = (Kullanici) req.getSession().getAttribute("kullaniciS");

        if (kul == null) {
            if (url.contains("backend") || url.contains("logout")) {
                res.sendRedirect(req.getContextPath() + "/frontend/login.xhtml");
            } else {
                chain.doFilter(request, response);
            }
        } else {
            if (url.contains("backend") || url.contains("login")) {
                if (kul.getYetki().getYetkiAdi().equals("admin")) {
                    res.sendRedirect(req.getContextPath() + "/backend/admin.xhtml");
                } else {
                    res.sendRedirect(req.getContextPath() + "/backend/kullanici.xhtml");
                }
            } else if (url.contains("logout")) {
                req.getSession().invalidate();
                res.sendRedirect(req.getContextPath() + "/index.xhtml");
            } else {
                chain.doFilter(request, response);

            }
        }

    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void destroy() {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
