﻿namespace MakeMeFamous.API.Authorization
{
    public class AwsConfiguration
    {
        public string Region { get; set; }
        public string UserPoolClientId { get; set; }
        public string UserPoolClientSecret { get; set; }
        public string UserPoolId { get; set; }
    }
}
