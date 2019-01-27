using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using MakeMeFamous.API.Model;

namespace MakeMeFamous.API.Authorization
{
    public static class UserIdentity
    {
        private static Dictionary<string, Session> sessions = new Dictionary<string, Session>();

        //crude implementation of caching, not production code
        public static void StartSession(ClaimsPrincipal user, int accountId)
        {
            var loginSessionId = user.Subject();
            Session session;
            if (!sessions.ContainsKey(loginSessionId))
            {
                session = new Session();
                sessions.Add(loginSessionId, session);
            }
            else
            {
                session = sessions[loginSessionId];
            }

            session.AccountId = accountId;
            session.SessionStartTime = DateTime.UtcNow;
            session.Email = user.Email();
        }

        public static Session GetSession(ClaimsPrincipal user)
        {
            var loginSessionId = user.Subject();
            return sessions.ContainsKey(loginSessionId) ? sessions[loginSessionId] : null;
        }

        private static string Subject(this ClaimsPrincipal user)
        {
            return user.Claims.FirstOrDefault(x =>
                x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")?.Value;
        }

        private static string Email(this ClaimsPrincipal user)
        {
            return user.Claims.FirstOrDefault(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress")?.Value;
        }
    }
}
