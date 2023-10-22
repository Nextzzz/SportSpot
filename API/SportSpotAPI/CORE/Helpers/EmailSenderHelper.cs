using System.Net.Mail;
using System.Net;

namespace CORE.Helpers
{
    public static class EmailSenderHelper
    {
        public static string SendConfirmation(string mailFrom, string pass, string mailTo)
        {
            var code = GenerateRandomNumberString(6);

            using (MailMessage mail = new MailMessage())
            {
                mail.From = new MailAddress(mailFrom);
                mail.To.Add(mailTo);
                mail.Subject = "Confirm your account";
                mail.Body = $"<h1>Confirmation code: {code}</h1> <p>Please, enter this code to activate your account</p>";
                mail.IsBodyHtml = true;

                using (SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587))
                {
                    smtp.UseDefaultCredentials = false;
                    smtp.Credentials = new NetworkCredential(mailFrom, pass);
                    smtp.EnableSsl = true;
                    smtp.Send(mail);
                }
            }

            return code;
        }

        private static string GenerateRandomNumberString(int length)
        {
            Random random = new Random();
            string result = "";

            for (int i = 0; i < length; i++)
            {
                result += random.Next(10).ToString();
            }

            return result;
        }

    }
}
