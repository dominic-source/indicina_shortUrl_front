import { UrlEntryType } from "./types";

class TrieNode {
  children: Record<string, TrieNode> = {};
  isEndOfWord: boolean = false;
  data?: any;
}

export class Trie {
  root = new TrieNode();

  insert(word: string, data?: any) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
    if (data !== undefined) {
      node.data = data;
    }
  }

  getWordsWithPrefix(prefix: string): UrlEntryType[] {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }
    const results: UrlEntryType[] = [];
    const dfs = (curr: TrieNode) => {
      if (curr.isEndOfWord && curr.data !== undefined) results.push(curr.data);
      for (const char in curr.children) {
        dfs(curr.children[char]);
      }
    };
    dfs(node);
    return results;
  }
}
