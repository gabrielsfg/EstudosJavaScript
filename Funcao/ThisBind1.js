/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ap2.anobissexto;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.DecimalFormat;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author User
 */
@WebServlet(name = "ServletVerificarAnoBissexto", urlPatterns = {"/eh_bissexto"})
public class ServletVerificarAnoBissexto extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        boolean ehBissexto = false;
        
        int ano = Integer.parseInt(request.getParameter("ano"));

        /**
         * SE ((ano MOD 400) = 0)
         *      ENTAO 
         *          IMPRIMIR("Ano eh bissexto");
         * SENAO
         *      SE (((ano MOD 4) = 0) E ((ano MOD 100) != 0))
         *          ENTAO
         *              IMPRIMIR("Ano eh bissexto");
         *      SENAO
         *              IMPRIMIR("Ano nao eh bissexto");
         *      FIMSE
         * FIMSE
         */
        if ((ano % 400)==0)
        {
            ehBissexto = true;
        }else
        {
            if(((ano % 4)==0) && ((ano % 100)!=0))
            {
                ehBissexto = true;
            }
        }
        
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) 
        {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Verificar se um ano e bissexto</title>");
            out.println("</head>");
            out.println("<body>");
            
            if (ehBissexto)
            {
                out.println("<h1>O ano de " + ano + " é bissexto.</h1>");
            }else
            {
                out.println("<h1>O ano de " + ano + " não é bissexto.</h1>");
            }            
            
            out.println("<a href=\"index.html\"> Voltar</a>");
            out.println("</body>");
            out.println("</html>");
        }
    }


}