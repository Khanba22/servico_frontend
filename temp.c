#include <stdio.h>
#include <stdbool.h>

#define MAX_PROCESSES 10
#define MAX_RESOURCES 3

int allocation[MAX_PROCESSES][MAX_RESOURCES];
int max_need[MAX_PROCESSES][MAX_RESOURCES];
int need[MAX_PROCESSES][MAX_RESOURCES];
int available[MAX_RESOURCES];
bool finish[MAX_PROCESSES];
int n_processes;

void init() {
    int i, j;
    printf("Enter number of processes: ");
    scanf("%d", &n_processes);

    // printf("Enter allocation matrix:\n");
    for (i = 0; i < n_processes; i++) {
        for (j = 0; j < MAX_RESOURCES; j++) {
            scanf("%d", &allocation[i][j]);
        }
    }

    // printf("Enter maximum need matrix:\n");
    for (i = 0; i < n_processes; i++) {
        for (j = 0; j < MAX_RESOURCES; j++) {
            scanf("%d", &max_need[i][j]);
            need[i][j] = max_need[i][j] - allocation[i][j];
        }
    }

    printf("Enter available resources (A B C):\n");
    scanf("%d %d %d", &available[0], &available[1], &available[2]);
}

bool is_safe(int process) {
    int i;
    for (i = 0; i < MAX_RESOURCES; i++) {
        if (need[process][i] > available[i])
            return false;
    }
    return true;
}

void resolve_deadlock(int victim) {
    int i;
    // Release resources allocated to the victim process
    for (i = 0; i < MAX_RESOURCES; i++) {
        available[i] += allocation[victim][i];
        allocation[victim][i] = 0;
        need[victim][i] = 0;
    }
}

bool bankers_algorithm() {
    int i, j;
    bool deadlock = false;

    // Check for deadlock
    for (i = 0; i < n_processes; i++) {
        if (!finish[i] && is_safe(i)) {
            // Execute the process
            printf("Executing process %d\n", i);
            finish[i] = true;
            // Release allocated resources
            resolve_deadlock(i);
            return true; // Indicates that execution happened
        }
    }

    return false; // Indicates no execution happened
}

int main() {
    init();
    while (bankers_algorithm()) {
        // Execute processes until no deadlock
    }
    printf("All processes executed.\n");
    return 0;
}
