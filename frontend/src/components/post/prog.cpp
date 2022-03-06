#include<bits/stdc++.h>
#define lld long long int
#define sort(arr) sort(arr, arr+sizeof(arr)/sizeof(arr[0]))
#define sum(arr) accumulate(arr, arr + sizeof(arr) / sizeof(arr[0]), 0)
#define mod 1000000007
using namespace std;
int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(0);
  long long t;
  t=9;
  cout<<t;
  return 0;
}
struct ListNode {
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
 };