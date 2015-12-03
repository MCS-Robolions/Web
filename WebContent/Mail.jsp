<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"
	import="java.io.*,java.util.*,javax.mail.*,javax.mail.internet.*,javax.activation.*,javax.servlet.http.*,javax.servlet.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
	<%
		try {
	        // sets SMTP server properties
	        Properties properties = new Properties();
	        properties.put("mail.smtp.host", "mail.RoboLions.com");
	        properties.put("mail.smtp.port", "8025");
	        properties.put("mail.smtp.auth", "true");
	        properties.put("mail.smtp.starttls.enable", "true");
	 
	        // creates a new session with an authenticator
	        Authenticator auth = new Authenticator() {
	            public PasswordAuthentication getPasswordAuthentication() {
	                return new PasswordAuthentication("robolion", "4pqX219rgO");
	            }
	        };
	 
	        Session mailSession = Session.getInstance(properties, auth);
	 
	        // creates a new e-mail message
	        Message msg = new MimeMessage(mailSession);
	 
	        msg.setFrom(new InternetAddress(request.getParameter("email")));
	        InternetAddress[] toAddresses = { new InternetAddress("mchsrobolions@gmail.com") };
	        msg.setRecipients(Message.RecipientType.TO, toAddresses);
	        msg.setSubject("Sponsoring RoboLions");
	        msg.setSentDate(new Date());
	        
	        String msgText = "Please contact me about sponsoring MCHS RoboLions!\n\nYou can reach me at " + request.getParameter("email") + "\n\nAny additional info: " + request.getParameter("additionalInformation") + "\n\nSincerely\n" + request.getParameter("firstName") + " " + request.getParameter("lastName");
	        
	        msg.setText(msgText.replace("/\n/g","%0A"));
	        
	        // sends the e-mail
	        Transport.send(msg);
	        
            response.sendRedirect("Home.html");

		} catch (Exception e) {
			e.printStackTrace();
		}
	%>

</body>
</html>