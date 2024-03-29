#include <stdio.h>
#include <stdbool.h>

#define MAX_PROCESSES 10
#define MAX_RESOURCES 10

int allocation[MAX_PROCESSES][MAX_RESOURCES];
int request[MAX_PROCESSES][MAX_RESOURCES];
int available[MAX_RESOURCES];
bool finish[MAX_PROCESSES];
int n_processes, n_resources;

void init() {
    int i, j;
    printf("Enter number of processes: ");
    scanf("%d", &n_processes);
    n_resources = 3;

    printf("Enter allocation matrix:\n");
    for (i = 0; i < n_processes; i++) {
        for (j = 0; j < n_resources; j++) {
            scanf("%d", &allocation[i][j]);
        }
    }

    printf("Enter request matrix:\n");
    for (i = 0; i < n_processes; i++) {
        for (j = 0; j < n_resources; j++) {
            scanf("%d", &request[i][j]);
        }
    }

    printf("Enter available resources:\n");
    for (i = 0; i < n_resources; i++) {
        scanf("%d", &available[i]);
    }
}

bool is_safe(int process, int work[]) {
    int i;
    for (i = 0; i < n_resources; i++) {
        if (request[process][i] > work[i])
            return false;
    }
    return true;
}

void vanker_algorithm() {
    int work[MAX_RESOURCES];
    int i, j;
    for (i = 0; i < n_resources; i++) {
        work[i] = available[i];
    }

    for (i = 0; i < n_processes; i++) {
        finish[i] = false;
    }

    bool deadlock = true;
    while (deadlock) {
        deadlock = false;
        for (i = 0; i < n_processes; i++) {
            if (!finish[i] && is_safe(i, work)) {
                for (j = 0; j < n_resources; j++) {
                    work[j] += allocation[i][j];
                }
                finish[i] = true;
                deadlock = true;
            }
        }
    }

    for (i = 0; i < n_processes; i++) {
        if (!finish[i]) {
            printf("Deadlock detected!\n");
            int victim = -1;
            int max_allocated = -1;
            for (j = 0; j < n_processes; j++) {
                if (finish[j])
                    continue;
                int allocated_resources = 0;
                for (int k = 0; k < n_resources; k++) {
                    allocated_resources += allocation[j][k];
                }
                if (allocated_resources > max_allocated) {
                    max_allocated = allocated_resources;
                    victim = j;
                }
            }
            printf("Victim process: %d\n", victim + 1);
            return;
        }
    }

    printf("No deadlock detected.\n");
}

int main() {
    init();
    vanker_algorithm();
    return 0;
}
