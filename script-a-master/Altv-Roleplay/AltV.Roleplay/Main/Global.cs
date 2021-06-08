﻿using System;
using AltV.Net.Async;
using AltV.Net.Elements.Entities;
using Altv_Roleplay;

internal class Global : Main
{
    public static class mGlobal
    {
        public class VirtualAPI
        {
            /// <summary>
            ///     Permet d'effectuer un appel API 100% Thread-Safe via le taskmanager interne de alt:V
            /// </summary>
            /// <param name="function"></param>
            public void RunThreadSafe(Action function) {
                AltAsync.Do(()
                    =>
                {
                    function.Invoke();
                });
            }

            public static void TriggerClientEventSafe(IPlayer entity, string eventName, params object[] args) {
                if (entity != null && entity.Exists)
                    entity.EmitLocked(eventName, args);
            }
        }
    }
}