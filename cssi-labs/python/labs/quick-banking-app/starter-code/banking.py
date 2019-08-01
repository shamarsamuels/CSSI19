#!/usr/bin/python
#
# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Replace "pass" with your code

import time

class BankAccount(object):
    def __init__(self, label, balance):
        self.label = label
        self.balance = balance
        self.transactions = []
    def __str__(self):
        return '{label} currently has {balance} in account.'.format(label = self.label, balance = self.balance)
    def withdraw(self, amount):
        if amount > 0 and amount <= self.balance:
            self.balance -= amount
            self.transactions.append(Transaction(time.time(), 'withdraw', amount))
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.transactions.append(Transaction(time.time(), 'deposit', amount))
    def rename(self, new_name):
        if new_name:
            self.label = new_name
    def transfer(self,dest_account, amount):
        if amount > 0 and amount <= self.balance:
            dest_account.balance += amount
            self.balance -= amount
            self.transactions.append(Transaction(time.time(), 'transfer', amount, dest_account.label))
    def see_transactions(self):
        for transcation in self.transactions:
            print(transcation)

class Transaction(object):
    def __init__(self, timestamp, type, amount, dest_account = None):
        self.time = timestamp
        self.type = type
        self.amount = amount 
        if type == 'transfer':
            self.dest_account = dest_account
    def __str__(self):
        if self.type == 'transfer':
            return '{0}: transfer ${1} to account {2}'.format(self.time, self.amount, self.dest_account)
        else:
            return '{0}: {1} ${2}'.format(self.time, self.type, self.amount)
